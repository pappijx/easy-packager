import { createContext, Dispatch, PropsWithChildren, useState } from 'react'

interface IRecursiveComponentContext extends PropsWithChildren {
  data: any
}

export type IDeleteItem = (keyString: string) => void
export type IAddItem = (newChild: any, keyString: string) => void
export type IUpdateNodeByPath = (updatedProperties: any, keyString: string) => void

interface IRecursiveContext {
  deleteItem: IDeleteItem
  recursiveData: any
  setRecursiveData: Dispatch<any>
  addItem: IAddItem
  updateNodeByPath: IUpdateNodeByPath
}

export const RecursiveContext = createContext<IRecursiveContext>({
  deleteItem: () => {},
  recursiveData: {},
  setRecursiveData: () => {},
  addItem: () => {},
  updateNodeByPath: () => {},
})

export const RecursiveComponentContext = ({ children, data }: IRecursiveComponentContext) => {
  const [recursiveData, setRecursiveData] = useState(data)

  const deleteItem = (keyString: string) => {
    const keys = keyString.split('.')
    let current = recursiveData
    if (keyString) {
      for (let i = 0; i < keys.length - 1; i++) {
        const index = parseInt(keys[i])
        if (!current.children || !current.children[index]) {
          return false // Child not found
        }
        current = current.children[index]
      }
      const lastIndex = parseInt(keys[keys.length - 1])
      if (!current.children || !current.children[lastIndex]) {
        return false // Child not found
      }
      current.children.splice(lastIndex, 1)
      setRecursiveData(() => ({ ...recursiveData }))
    } else {
      setRecursiveData(() => ({
        ...data,
        children: [],
      }))
    }
  }

  const addItem = (newChild: any, keyString: string) => {
    const keys = keyString.split('.')

    let current = recursiveData

    if (keyString) {
      // Traverse the data structure to the parent node
      for (let i = 0; i < keys.length; i++) {
        const index = parseInt(keys[i])
        if (!current.children || !current.children[index]) {
          return false // Parent not found
        }
        current = current.children[index]
      }

      // Add the new child to the parent node
      const parentIndex = parseInt(keys[keys.length - 1])
      if (!current.children) {
        current.children = [] // Initialize children array if it doesn't exist
      }
      current.children.splice(parentIndex + 1, 0, newChild)
    } else {
      if (!current.children) {
        current.children = [] // Initialize children array if it doesn't exist
      }
      current.children.push(newChild)
    }

    // Insert the new child
    setRecursiveData(() => ({ ...recursiveData }))
  }

  /**
   * @description Update an item in the data structure
   * @param {Object} updatedChild - The updated child object
   * @param {string} keyString - The key string of the item
   */
  function updateNodeByPath(updatedProperties: any, keyString: string) {
    const keys = keyString.split('.')
    let current = recursiveData

    // Traverse the data structure to the node to be updated
    if (keyString) {
      for (let i = 0; i < keys.length; i++) {
        const index = parseInt(keys[i])
        if (!current.children || !current.children[index]) {
          return false // Node not found
        }
        current = current.children[index]
      }
    }

    // Update properties of the node
    Object.assign(current, updatedProperties)
    setRecursiveData(() => ({ ...recursiveData }))
  }

  return (
    <RecursiveContext.Provider
      value={{
        deleteItem,
        recursiveData,
        setRecursiveData,
        addItem,
        updateNodeByPath,
      }}
    >
      {children}
    </RecursiveContext.Provider>
  )
}
