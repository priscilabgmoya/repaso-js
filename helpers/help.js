const generarID = () => {
    let id = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
    + "abcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 1; i <= 10; i++) {
      let  char = Math.floor(Math.random() * str.length + 1);
      id += str.charAt(char);
    }
    return id;
};

export {
    generarID
}