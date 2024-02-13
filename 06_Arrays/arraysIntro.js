const strings = ["a", "b", "c", "d"];
//on 32-bit the array would take 16 bytes of storage

strings.splice(0, 2, "aliens");

console.log(strings);
