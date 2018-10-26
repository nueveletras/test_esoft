
Array.matrixRandom = function(n,m) {
    var arr = [];
    var temp;
    var matrixNumbers = [];
    var max = m*n;
    var min = 1;
    for (var i = 0; i < n; ++i) {
        var columns = [];
        for (var j = 0; j < m; ++j) {
            columns[j] = Math.floor(Math.random()*(max)+min);
            temp = columns[j];
            checkRepeat();
            function checkRepeat(num) {
                return num == temp;
            }
            temp = columns.filter(checkRepeat)
            if (temp.length >=2) {
                j--;
            }
            else{ 
                matrixNumbers.push(columns[j])
                temp = matrixNumbers.filter(checkRepeat)
                if (temp.length >= 2) {
                    delete matrixNumbers[matrixNumbers.length - 1]
                    j--;
                }
            }
        }
        arr[i] = columns;
        txt=txt+arr[i].join(" | ") + "<br>";
    }


    for (let i = 0; i < m; i++) {
        aux = 0;
        totalCol = 0
            for (let j = 0; j < n; j++) {
                aux = arr[j][i];
                totalCol += aux;           
            }
            if ((i%2)==0) {
                oddCols += totalCol
            }
            else{
                pairCols += totalCol
                count1++;
                pairProm = pairCols/count1
            }
            totals.push(totalCol)
        }
    function calculate(value, index){
        if ((index%2)==0) {
                if (value > pairProm) {
                    count2++
                }
            }
    }
    totals.forEach(calculate);
    console.log("Numero de columnas que cumplen condición: " + count2)
    return arr;
} 