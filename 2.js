function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const student = {
    name: "Igor", 
    age: 33,
    Profession: "Banking specialist",
  };

console.log(showProps(student, "age"));  
console.log(showProps(student, "birthplace")); 