const proto = {
    sender: 'Aman@gmail.com'
};

// const child = Object.create(proto);
const child = Object.setPrototypeOf(child,proto)
child.recipient = 'aman@gmail.com';



console.log(child.sender);
console.log(child.recipient);
