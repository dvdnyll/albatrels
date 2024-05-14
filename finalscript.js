// please do not use my source code without my permission, I put a lot of effort into it and please do let me know if you want to clone it, use it for your project, I begggg

const questions = [
    {
        question: "1. You wake up in a forest with soldiers screaming, \"YOU'RE UP! YOU'RE UP! WE THOUGHT YOU DIED FROM THE DRAGON ATTACK!\"",
        image: "images/Q1.gif",
        answers: {
            S: {
                text: "\"A dragon? That's not real. Wasn't I just reading a book in bed? I must be dreaming.\"",
                scores: { S: +4, N: 0 },
            },
            N: {
                text: "\"HUH? A DRAGON? WHAT IS THIS WORLD? WHERE AM I? WHAT'S HAPPENING?\"",
                scores: { S: 0, N: +4 },
            },
            Sn: {
                text: "\"A dragon attack? I thought I fell asleep. Am I in the story I was reading?\"",
                scores: { S: +3, N: 0 },
            },
            sN: {
                text: "\"A DRAGON ATTACK? Am I in the book I was reading? Is this like Harry Potter?",
                scores: { S: 0, N: +3 },
            },
        },
    },
    {
        question: "2. You find out you and your fellow adventurers were on a quest to slay the dragon. Suddenly, a horde of gnomes raid your party.",
        image: "images/Q2.gif",
        answers: {
            J: {
                text: "\"Are these gnomes? This can't be real. I've only seen them as stone on my neighbors lawn...\"",
                scores: { P: 0, J: +4 },
            },
            P: {
                text: "\"Can they join our party? No? I'm just gonna sneakily kidnap one as a souvenir.\"",
                scores: { P: +4, J: 0 },
            },
            jP: {
                text: "\"Grab as many as you can and just RUN! These tiny fools are no threat individually!\"",
                scores: { P: +3, J: 0 },
            },
            Jp: {
                text: "\"Dragons and now gnomes? What's next? A minotaur? Someone please wake me up from this dream.\"",
                scores: { P: 0, J: +3 },
            },
        },
    },
    {
        question: "3. Your party escape the gnomes and end up in a magical mushroom forest. As you harvest one, it suddenly screams, \"OUCH!\"",
        image: "images/Q3.gif",
        answers: {
            T: {
                text: "\"... nah. Must've been the wind I heard. Maybe I need sleep. I'm starting to be delusional.\"",
                scores: { T: +4, F: 0 },
            },
            F: {
                text: "\"Sorry, did I hurt you! You can feel pain? Can you feel emotion too? Did I make you sad?\"",
                scores: { T: 0, F: +4 },
            },
            tF: {
                text: "\"WOAH! IT SPOKE! THE MUSHROOM SPOKE! DID I HURT YOU? I'M SORRY!\"",
                scores: { T: 0, F: +3 },
            },
            Tf: {
                text: "\"HUH? This can't be real. No way a mushroom just spoke to me. Hey, say something!\"",
                scores: { T: +3, F: 0 },
            },
        },
    },
    {
        question: "4. A mushroom friend has joined your party! Leaving the forest, your party comes across a lively town with townsfolk, musicians, and bustling shops.",
        image: "images/Q4.gif",
        answers: {
            I: {
                text: "\"I gotta get some rest and process everything first. Also can't pass up a good midday nap.\"",
                scores: { I: +4, E: 0 },
            },
            E: {
                text: "\"Wanna go dance to the music? How about trying phoenix drumsticks? Should we also buy souvenirs?\"",
                scores: { I: 0, E: +4 },
            },
            iE: {
                text: "\"This town has a jackalope cafe!? I gotta pet one before I die. Anyone wanna come with?\"",
                scores: { I: 0, E: +3 },
            },
            Ie: {
                text: "\"The siren foam refresher replenishes stamina? I need one to destress while listening to the musicians.\"",
                scores: { I: +3, E: 0 },
            },
        },
    },
    {
        question: "5. Your party gets plenty of rest and decide to leave. A mysterious mage in a dark robe stops you to offer various goods. Which do you take?",
        image: "images/Q5.gif",
        answers: {
            F: {
                text: "A pouch of fairy dust. It makes you look magical and glittery. What more do you need?",
                scores: { F: +4, T: 0 },
            },
            T: {
                text: "Griffin feathers that, when ingested, make you feel lighter and move faster.",
                scores: { F: 0, T: +4 },
            },
            tF: {
                text: "Jar of wyvern tears that heals any wound, even emotional ones. It's probably better than your therapist.",
                scores: { F: +3, T: 0 },
            },
            Tf: {
                text: "A tuft of Chimera fur with a 50/50 chance to either turn you super strong or super weak like a beansprout.",
                scores: { F: 0, T: +3 },
            },
        },
    },
    {
        question: "6. After thanking the mage, you catch up to your party in the forest who have discovered a fairy party with blasting music and blinding crystal lights.",
        image: "images/Q6.gif",
        answers: {
            I: {
                text: "\"A party? I was just able to get some rest from everything. Now we gotta entertain the fairies?\"",
                scores: { I: +4, E: 0 },
            },
            E: {
                text: "\"So this was where the party was at!? Get me on the dance floor! I gotta show off some groovy human moves for these creatures.\"",
                scores: { I: 0, E: +4 },
            },
            eI: {
                text: "\"I'm gonna go chill with elves on the side. I heard the mystical pixie punch is the rave of the party.\"",
                scores: { I: +3, E: 0 },
            },
            Ei: {
                text: "\"Who's in charge of the setlist? The fairy music is fire! Someone introduce me to the DJ.\"",
                scores: { I: 0, E: +3 },
            },
        },
    },
    {
        question: "7. You hear a loud commotion on the dance floor. A fairy and an elf are getting into a fight and they turn to you for your judgement as an adventurer from a renowned guild.",
        image: "images/Q7.gif",
        answers: {
            S: {
                text: "\"What's going on? Why is there fighting? You guys better have a justified reason for interrupting this party.\"",
                scores: { S: +4, N: 0 }
            },
            N: {
                text: "\"Dance battle! The only way to solve any problem is to show your most flashy moves and out dance your opponent!\"",
                scores: { S: 0, N: +4 },
            },
            sN: {
                text: "\"How does law and order work in this world? Is there a battle to the death? Are there silly riddles you guys compete to solve?\"",
                scores: { S: 0, N: +3 },
            },
            Sn: {
                text: "\"Not my monkey, not my circus. You guys started the fight. You guys figure it out. I'm just gonna enjoy my juice.\"",
                scores: { S: +3, N: 0 },
            },
        },
    },
    {
        question: "8. Suddenly, the party is crashed by a brilliantly, sparkling indigo dragon ferociously flying around and sweeping its tail across the garden.",
        image: "images/Q8.gif",
        answers: {
            P: {
                text: "\"So you've decided to come to us dragon! Be prepared because... well, we haven't really prepared anything... BUT BEWARE!\"",
                scores: { P: +4, J: 0 },
            },
            J: {
                text: "\"When will I get a proper break!? Get all the creatures out of here and someone please save the pixie punch!\"",
                scores: { P: 0, J: +4 },
            },
            jP: {
                text: "\"We meet again! Since you've decided to crash the party, I declare you to a dance battle to the death!\"",
                scores: { P: +3, J: 0 },
            },
            Jp: {
                text: "\"Ugh, right now!? I wanted to rest at the butterfly sauna, tame a phoenix, and visit the elf village before even going to you.\"",
                scores: { P: 0, J: +3 },
            },
        },
    },
    {
        question: "9. The dragon hurls fire towards all the creatures as they scurry away. You and your party members prepare for battle reluctantly.",
        image: "images/Q9.gif",
        answers: {
            J: {
                text: "\"Tanks, charge and block all damage. Soldiers, find openings and attack the dragon. Mages, stay in the backline and channel spells.\"",
                scores: { J: +4, P: 0 },
            },
            P: {
                text: "\"The element of surprise is the best! Go mushroom! I choose you! Anyone have any gnomes from before?\"",
                scores: { J: 0, P: +4 },
            },
            Jp: {
                text: "\Tanks defend, soldiers attack, and mages support! If this doesn't work, try to train the dragon! I think I saw that in a movie somewhere.\"",
                scores: { J: +3, P: 0 },
            },
            jP: {
                text: "\"CHARGE!! Attack the dragon however you can! Throw the gnomes if you took any! Bite it's tail if you need to! Do whatever you can to secure victory!\"",
                scores: { J: 0, P: +3 },
            },
        },
    },
    {
        question: "10. After a grueling battle, your party stands victoriously. From behind the trees, a majestic hippocampus approaches with a glowing aura.",
        image: "images/Q10.gif",
        answers: {
            N: {
                text: "\"What is that mermaid goat? Will it feed us to the mermaids? Will it guide us to unicorns?\"",
                scores: { N: +4, S: 0 },
            },
            S: {
                text: "*you stand on guard* \"No one told me there'd be round two! I better get paid overtime!\"",
                scores: { N: 0, S: +4 },
            },
            sN: {
                text: "*kneel and bow to the floor* \"White aura... some mermaid tail... Are you the god of this world, majestic being?\"",
                scores: { N: +3, S: 0 },
            },
            Sn: {
                text: "\"I guess we die here adventurers. Bummer, I wish I could've at least seen a unicorn before I died.\"",
                scores: { N: 0, S: +3 },
            },
        },

    },
    {
        question: "11. The hippocampus's voice echos, \"I was cursed to be a weak, old mage, but you guys killed the dragon and saved me. I will grant you all any wish as a reward!\"",
        image: "images/Q11.gif",
        answers: {
            E: {
                text: "\"You're the mage from before! We would love a nation wide celebration with all the creatures... and magical pastries please.\"",
                scores: { E: +4, I: 0 },
            },
            I: {
                text: "\"Send me home! I'm trying to go back to reading my book in my comfortable bed, snuggling next to my cat!\"",
                scores: { E: 0, I: +4 },
            },
            Ei: {
                text: "\"More adventures! More adventures! That is, after we finally get some rest at the butterfly sauna.\"",
                scores: { E: +3, I: 0 },
            },
            eI: {
                text: "\"Could I have a unicorn as a souvenir before returning to my world? There IS a way to get back... right?\"",
                scores: { E: 0, I: +3 },
            },
        },
    },
    {
        question: "12. You doze off after a long night of celebration. You wake up to find yourself back in your comfy bed, hugging the fantasy storybook you had been reading.",
        image: "images/Q12.gif",
        answers: {
            T: {
                text: "\"What a wild and tiring dream I just had. Well, time to sleep more.\"",
                scores: { F: 0, T: +4 },
            },
            F: {
                text: "\"I have to tell someone about the crazy adventure I just went on! I saw gnomes, got a mushroom partner, partied with fairies, and killed a dragon!\"",
                scores: { F: +4, T: 0 },
            },
            fT: {
                text: "\"What a great dream. I gotta go back to sleep to dream about going on more adventures again.\"",
                scores: { F: 0, T: +3 },
            },
            Ft: {
                text: "\"What was that!? Was that a dream or was I actually in the storybook? I already miss everyone! Especially my mushroom!\"",
                scores: { F: +3, T: 0 },
            },
        },
    },
];

const resultOptions = {
    "ISTJ": {
        image: "7kitsune.png",
    },
    "ISFJ": {
        image: "8basilisk.png"
    },
    "INFJ": {
        image: "3fairy.png"
    },
    "INTJ": {
        image: "12sphinx.png"
    },
    "ISTP": {
        image: "6reaper.png"
    },
    "ISFP": {
        image: "5hydra.png"
    },
    "INFP": {
        image: "9unicorn.png"
    },
    "INTP": {
        image: "14griffin.png"
    },
    "ESTP": {
        image: "10hippocampus.png"
    },
    "ESFP": {
        image: "2siren.png"
    },
    "ENFP": {
        image: "4phoenix.png"
    },
    "ENTP": {
        image: "13jackalope.png"
    },
    "ESTJ": {
        image: "15cerberus.png"
    },
    "ESFJ": {
        image: "11gnome.png"
    },
    "ENFJ": {
        image: "1wyvern.png"
    },
    "ENTJ": {
        image: "16dragon.png"
    },

};

let currentQuestion = 0;
// let userAnswers = {};


function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<p>${question.question}</p>`;
        if (question.image) {
            html += `<img src="${question.image}" alt="Question ${currentQuestion + 1}">`;
        }
        for (const option in question.answers) {
            html += `<button class="large-rectangular" value="${option}" id="${option}">${question.answers[option].text}</button>`;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {
    
    }
}


document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
    // userAnswers.userName = userName;
});


//click
function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.large-rectangular');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}



//answers
function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];

    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }

    // remove this when done debugging
    // Display the scores for each letter
    
    //const scoresContainer = document.querySelector('.scores-container');
    //scoresContainer.innerHTML = `
    //    <p>E Score: ${userAnswers['E'] || 0}, S Score: ${userAnswers['S'] || 0}, T Score: ${userAnswers['T'] || 0}, P Score: ${userAnswers['P'] || 0}</p>
    //    <p>I Score: ${userAnswers['I'] || 0}, N Score: ${userAnswers['N'] || 0}, F Score: ${userAnswers['F'] || 0}, J Score: ${userAnswers['J'] || 0}</p>
    //
    //`;
    // to here

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

// ...


function showResult() {
    const resultElement = document.getElementById('result');
    const resultTextContainer = document.querySelector('.result-text');
    const resultImage = document.getElementById('result-image');
    const topLetters = {};

    const pairs = ["IE", "NS", "TF", "PJ"];
    pairs.forEach(pair => {
        const options = pair.split('');
        const scores = options.map(option => userAnswers[option] || 0);
        const topOptionIndex = scores.indexOf(Math.max(...scores));
        const topOption = options[topOptionIndex];
        topLetters[pair] = topOption;
    });

    //each pair
    const result = pairs.map(pair => topLetters[pair]).join('');

    //show result
    const personalityData = resultOptions[result];
    if (personalityData) {
        resultTextContainer.innerHTML = `
        `;

        resultImage.src = "images/"+personalityData.image;
        resultImage.alt = `${personalityData.image} Image`;
    } else {

    }

    document.getElementById('quiz').style.display = 'none'; // Hide the quiz
    document.getElementById('result').style.display = 'block'; // Show the result
    document.getElementById('restart-button').style.display = 'block'; // Show the restart button
}



//Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); // Start the quiz from the beginning
}

document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();


