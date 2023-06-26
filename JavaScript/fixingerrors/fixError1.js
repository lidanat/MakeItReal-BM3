function incrementItems(arr) {
    for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1;
    }
    return arr;
    }

    caseOne = [0,1,2,3];
    caseTwo = [2,4,6,8];
    caseThree = [-1,-2,-3,-4]
    
    console.log(incrementItems(caseOne));
    console.log(incrementItems(caseTwo));
    console.log(incrementItems(caseThree));


    