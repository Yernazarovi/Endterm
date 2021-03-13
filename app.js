var http = require('http');
var files = require('fs');

http.createServer(function (prompt, reply) {
    console.log(`Requested url: ${prompt.url}`);
    var stateReq = '.' + prompt.url;
    switch(stateReq){
        case './':
            stateReq = './index.html';
            break;
        case './about':
            stateReq = './about.html';
    }
    files.readFile(stateReq, function(errors,  materials ) {
        if (errors) {
            switch(errors.code){
                case 'ENOENT':
                    files.readFile('error.html', function(errors, materials) {
                        reply.writeHead(404, {'Content-Type': 'text/html'});
                        reply.write(materials);
                        reply.end();
                    });
                    break;
                default:
                    reply.writeHead(500);
                    reply.end('Internal error with a response code 500');
                    break;
            }
            return;
        }
            switch(prompt.url){
            case "/video/students/memes.mp4":
                files.readFile('./video/students/memes.mp4', function(errors, materials){
                    reply.writeHead(200, {'Content-Type': 'video/mp4'});
                    reply.write(materials);
                    reply.end();
                })
                break;
            case '/img/welcome.jpg':
                files.readFile('./img/welcome.jpg', function(errors, materials){
                    reply.writeHead(200, {'Content-Type': 'image/jpg'});
                    reply.write(materials);
                    reply.end();
                })
                break;
            case '/img/about.jpg':
                files.readFile('./img/about.jpg', function(errors, materials){
                    reply.writeHead(200, {'Content-Type': 'image/jpg'});
                    reply.write(materials);
                    reply.end();
                })
                break;
            case '/style.css':
                files.readFile('style.css', 'utf8', function(errors, materials){
                    reply.writeHead(200, {'Content-Type': 'text/css'});
                    reply.write(materials);
                    reply.end();
                })
                break;
            case "/img/gallery/graduation.jpg":
                files.readFile('./img/gallery/graduation.jpg', function(errors, materials){
                    reply.writeHead(200, {'Content-Type': 'image/jpg'});
                    reply.write(materials);
                    reply.end();
                })
                break;
            case '/img/cry.jpg':
                files.readFile('./img/cry.jpg', function(errors, materials){
                    reply.writeHead(200, {'Content-Type': 'image/jpg'});
                    reply.write(materials);
                    reply.end();
                })
                break;
            case "/img/gallery/study.jpg":
                files.readFile('./img/gallery/study.jpg', function(errors, materials){
                    reply.writeHead(200, {'Content-Type': 'image/jpg'});
                    reply.write(materials);
                    reply.end();
                })
                break;
            default:
                reply.writeHead(200, {'Content-Type': 'text/html'});
                reply.write(materials);
                reply.end();
            }
    });
}).listen(3000);
console.log('The server running on 3000');