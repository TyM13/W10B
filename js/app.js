let best_h1 = document.querySelector(`#header_tile`);           //create variable best_h1 which is = to #header_title
best_h1[`style`][`textAlign`] = `center`;                       //seletct style and text align best_h1 to center 


let all_ptags = document.querySelectorAll(`main > p`)           //create variable all_ptags which is = to all the p tags of main
for (let i = 0; i < all_ptags.length; i++) {                    //for loop, i sets index to 0, if i is less than the number for all_ptags adds 1 to index
    all_ptags[i][`innerText`] += `, give me colder weather`;    //will add give me colder weather to the end of the p tags, depending on which index its on
}


let footer_title = document.getElementById(`footer_h3`);        //create variable footer_title which is = to the id footer_h3
footer_title[`outerHTML`] = `<h3>this is, </h3>` + footer_title[`outerHTML`]; //this will add a new tag before the tag footer_title



let last_p = document.getElementsByClassName(`last_ptag`);      //create variable best_h1 which is = to #header_title
for (let i = 0; i < last_p.length; i++) {                       //for loop, i sets index to 0, if i is less than the number for last_p adds 1 to index
    last_p[i][`outerHTML`] = `<h1>no more p tag</h1>`;          //will overwrite wxisting tag with h1 tag, depending on which index its on
}



let footer = document.getElementById(`foot`);       //create variable best_h1 which is = to #header_title
footer[`innerHTML`] = `<p>i am a p tag woo</p>`;    //this will nest a ptag inside of the tag that has the id `foot`

