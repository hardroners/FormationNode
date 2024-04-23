const getUserData = async () => {
    var data = {firstname: 'john', lastname: 'Doe' };
    return data;
}

getUserData().then(data => console.log(`Full name ${data.lastname} ${data.lastname}`));

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sumOperationAsync(x, y) {
    await sleep(500);
    return x+y;
}


sumOperationAsync(5, 7).then((result) => {
    console.log("The result of the addition is:", result);
})