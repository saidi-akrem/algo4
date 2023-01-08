const insertion = (arr) => {
    for (let i = 0 ; i < arr.length ; i++) {
        
        for( let j = i+1 ; j > 0 ; j--) {
            if (arr[j] < arr[j-1]){
                const temp = arr [j] ;
                arr [j] = arr [j-1] ;
                arr [j-1] = temp
            } 
             
        }
        
        
    }

    return console.log( arr)
}

insertion([4, -2, 1, 9, 0])

/* ----------------ALGO---------------------

for i form 0 to arr.length step 1 do
    
    for j = i+1 AND j > 0 ; step -1 do 
       
       if (arr[j] < arr [j-1] ) do
           temp := arr[j]
           arr[j] := arr[j-1]
           arr [j-1] := temp 
        else
            break
        end if
    
    end for

end for

write (arr)

END

*/