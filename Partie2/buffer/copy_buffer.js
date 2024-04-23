var sourceBuf = Buffer.alloc(123);


var targetBuf = Buffer.from('ABC');
sourceBuf.copy(targetBuf);
console.log("Target Buffer content: " + targetBuf.toString());

buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])
