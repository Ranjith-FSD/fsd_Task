let obj1 = {
    name: 'person1',
    age: 5
};
let obj2 = {
    age: 5,
    name: 'person1'
};

let json1 = '{"name":"person1","age":5}';
let json2 = '{"age":5,"name":"person1"}';

let jsn1 = JSON.parse(json1);
let jsn2 = JSON.parse(json2);

if ((Object.keys(jsn1).indexOf[0] == Object.keys(jsn1).indexOf[1]
    && (Object.values(jsn1).indexOf[1] == Object.values(jsn2).indexOf[0]))) {
    console.log("True");
} else {
    console.log("false");
}