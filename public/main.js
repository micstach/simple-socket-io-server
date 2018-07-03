import $ from 'jquery';

class HelloWorld {
    constructor() {
        $(document.body).append('<h1>Messanger...</h1>');
    }
}

const helloWorld = new HelloWorld();