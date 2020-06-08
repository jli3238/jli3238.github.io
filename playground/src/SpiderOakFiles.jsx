import React from 'react';
import { addFile, addVersion, getFiles } from './SpiderOakFilesApi';
import PageContainer from '../src/PageContainer';

function File({ updateFiles, file }) {
  const onRename = () => {
    const newName = window.prompt('Rename this file');
    if (newName.trim().length === 0) return;
    file = addVersion(file.id, newName);
    updateFiles(file);
  }

  return (
    <>
      <strong>{file.versions && file.versions[0].name}</strong>
      <button onClick={onRename}>Rename</button>
      <ul>
        { file.versions && file.versions.map(version => (
          <li key={version.id}>{ version.name }</li>
        )) }
      </ul>
    </>
  );
}

export default function SpiderOakFiles() {
  // const [ , setState ] = React.useState();
  // setInterval(() => setState(Math.random()), 1000);
  const newFileNameInput = React.useRef('');
  const [ sortAsc, setSortAsc] = React.useState(false);
  // const files = useFiles();
  const [ files, setFiles ] = React.useState([]);

  React.useEffect(() => { 
    getFiles().then(files => setFiles(files));
  });

  const onSort = () => {
    files.sort((file1, file2) => {
      const name1 = file1.versions[0].name.toUpperCase();
      const name2 = file2.versions[0].name.toUpperCase();
      let resultedFiles;
      if (sortAsc) {
        resultedFiles = (name1 < name2) ? -1 : (name1 > name2) ? 1 : 0;
        setSortAsc(false);
      } else {
        resultedFiles = (name1 > name2) ? -1 : (name1 < name2) ? 1 : 0;
        setSortAsc(true);
      }
      return resultedFiles;
    });
  }

  const onAddNew = () => {
    const newFileName = newFileNameInput.current.value;
    if (newFileName.trim() === '') return;
    const updatedFiles = addFile(newFileName);
    newFileNameInput.current.value = '';
    setFiles(updatedFiles);
  }

  const onUpdateFiles = (renamedFile) => {
    setFiles([...files, renamedFile]);
  }

  return (
    <PageContainer
      title='File Management' 
      Description='Manage files.'>
      <div>
        <button onClick={onSort}>Sort {sortAsc ? 'A-Z' : 'Z-A'}</button>
      </div>
      {
        files && files.length > 0 && files.map(file => <File updateFiles={onUpdateFiles} file={file} key={file.id} />)
      }
      <button onClick={onAddNew}>Add New File</button>
      <label>Enter a name for the new file: </label>
      <input type='text' ref={newFileNameInput} placeholder='Enter a name for the new file: '/>
    </PageContainer>
  );
}