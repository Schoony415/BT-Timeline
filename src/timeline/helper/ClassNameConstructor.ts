

export default function ClassNameConstructor(nameList:string[]):string{
    let temp: string= "";

    nameList.forEach(name=>{temp+=name+" "})

    return temp;
}