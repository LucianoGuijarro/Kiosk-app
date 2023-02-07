export const formaDate = (time) => {
    const date = new Date(time)
    return date.toLocaleDateString(); 
}