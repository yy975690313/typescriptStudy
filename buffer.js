buf = Buffer.alloc(256);
len = buf.write("www.runoob.com abcdefg 字节数");

console.log("写入字节数 : "+  len);
console.log("tostring : "+  buf.toString('utf8'));