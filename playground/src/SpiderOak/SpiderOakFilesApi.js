let files = [
  {
    id: 'the-file-id-1',
    versions: [
      { id: 1, name: 'test.txt' },
      { id: 0, name: 'test.txt' },
    ],
  },
  {
    id: 'the-file-id-2',
    versions: [
      { id: 1, name: 'recipes.doc' },
      { id: 0, name: 'recipes.doc' },
    ],
  },
  {
    id: 'the-file-id-3',
    versions: [
      { id: 1, name: 'picture.png' },
      { id: 0, name: 'photo.png' },
    ],
  },
].sort((file1, file2) => {
  const name1 = file1.versions[0].name.toUpperCase();
  const name2 = file2.versions[0].name.toUpperCase();
  return (name1 < name2) ? -1 : (name1 > name2) ? 1 : 0;    
});

export async function getFiles() {
  return files;
}

export async function addFile(name) {
  // TODO: Implement this API to add a new file according to task (5).
  const newFileId = [...files[0].id.split('-').slice(0,3), files.length + 1].join('-');
  if (files.find(file => file.id === newFileId)) return;
  const newFile = await addVersion(newFileId, name);
  files = [...files, newFile];
}

export async function addVersion(fileId, name) {
  // TODO: Insert the new version on the beginning of the stack according to task (1)
  const file = files.find(f => f.id === fileId) || {
    id: fileId,
    versions: []
  };
  const versionId = file.versions.length > 0 ? file.versions[file.versions.length - 1].id + 1 : 0;
  // file.versions.push({ id: versionId, name });
  file.versions = [{id: versionId, name: name}, ...file.versions];
  return file;
}
