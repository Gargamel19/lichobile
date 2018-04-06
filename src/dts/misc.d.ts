interface Array<T> {
    /**
      * Determines whether an array includes a certain element, returning true or false as appropriate.
      * @param searchElement The element to search for.
      * @param fromIndex The position in this array at which to begin searching for searchElement.
      */
    includes(searchElement: T, fromIndex?: number): boolean
}

// workaround as typescript standard lib does not support Array.isArray check
// for ReadonlyArray (narrows down to any)
interface ArrayConstructor {
    isArray(arg: ReadonlyArray<any> | any): arg is ReadonlyArray<any>
}
