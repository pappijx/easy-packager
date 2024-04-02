export interface IDataFolderStructure {
  username: string
  type?: 'file' | 'folder'
  children?: IDataFolderStructure[]
  image?: string
  comment?: string
}

export const dataFolderStructure: IDataFolderStructure = {
  username: 'Folder 1',
  type: 'folder',
  children: [
    {
      username: 'file',
      type: 'file',
    },
    {
      username: 'Folder 3',
      type: 'folder',
    },
  ],
}

export const dataComment = {
  username: 'Ayush',
  comment: 'Here I bring a new tool',
  image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
  children: [
    {
      username: 'Daddy 2',
      comment: 'Here I bring a new tool',
    },
  ],
}
