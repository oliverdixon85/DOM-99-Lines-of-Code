document.addEventListener("DOMContentLoaded", function () {

    let btn = document.getElementsByClassName('button')[0];

    btn.addEventListener('click', function () {


        let friend1 = document.createElement('div');
        let friendHeader1 = document.createElement('h3');
        friend1.className = 'friend';
        let friendName1 = document.createTextNode('John');

        friendHeader1.appendChild(friendName1);
        friend1.appendChild(friendHeader1);
        document.body.appendChild(friend1);

        let friend2 = document.createElement('div');
        let friendHeader2 = document.createElement('h3');
        friend2.className = 'friend';
        let friendName2 = document.createTextNode('Jack');

        friendHeader2.appendChild(friendName2);
        friend2.appendChild(friendHeader2);
        document.body.appendChild(friend2);

        let friend3 = document.createElement('div');
        let friendHeader3 = document.createElement('h3');
        friend3.className = 'friend';
        let friendName3 = document.createTextNode('Jimmy');

        friendHeader3.appendChild(friendName3);
        friend3.appendChild(friendHeader3);
        document.body.appendChild(friend3);

        let friend4 = document.createElement('div');
        let friendHeader4 = document.createElement('h3');
        friend4.className = 'friend';
        let friendName4 = document.createTextNode('Jones');

        friendHeader4.appendChild(friendName4);
        friend4.appendChild(friendHeader4);
        document.body.appendChild(friend4);

        let friend5 = document.createElement('div');
        let friendHeader5 = document.createElement('h3');
        friend5.className = 'friend';
        let friendName5 = document.createTextNode('Joey');

        friendHeader5.appendChild(friendName5);
        friend5.appendChild(friendHeader5);
        document.body.appendChild(friend5);



        let friends = document.getElementsByClassName('friend')

        for (var i = 0; i < friends.length; i++) {

            for (var x = 99; x > 0; x--) {
                let para = document.createElement('p');
                if (x === 1) {
                    let a = document.createTextNode(x + " lines of code in the file, " + x + " lines of code " + friends[i] + " strikes one out, clears it all out, " + "no more lines of code in the file")
                    para.appendChild(a);
                    friends[i].appendChild(para);
                } else {
                    let b = document.createTextNode(x + " lines of code in the file, " + x + " lines of code " + friends[i] + " strikes one out, clears it all out, " + (x - 1) + " lines of code in the file ")
                    para.appendChild(b);
                    friends[i].appendChild(para);
                }
            }
        }
    })
})
