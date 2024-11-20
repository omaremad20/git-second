let arrayQoutes = 
[
    `“Be yourself; everyone else is already taken.” ${document.getElementById("mainpara").innerHTML = `<br>` } -- Oscar Wilde` ,
    `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ${document.getElementById("mainpara").innerHTML = `<br>`} -- Marilyn Monroe` ,
    `“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.” ${document.getElementById("mainpara").innerHTML = `<br>`} -- William W. Purkey`,
    `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ${document.getElementById("mainpara").innerHTML = `<br>`} -- Dr. Seuss`,
    `“You only live once, but if you do it right, once is enough.”${document.getElementById("mainpara").innerHTML = `<br>`} -- Mae West` ,
    `“Be the change that you wish to see in the world.”${document.getElementById("mainpara").innerHTML = `<br>`} -- Mahatma Gandhi` ,
    `“In three words I can sum up everything I've learned about life: it goes on.”${document.getElementById("mainpara").innerHTML = `<br>`} -- Robert Frost` ,
    `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”${document.getElementById("mainpara").innerHTML = `<br>`} -- J.K. Rowling”` ,
    `“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend ” ${document.getElementById("mainpara").innerHTML = `<br>`} -- Albert Camus` ,
    `“If you tell the truth, you don't have to remember anything.”  ${document.getElementById("mainpara").innerHTML = `<br>` } -- Mark Twain` ,
    `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” ${document.getElementById("mainpara").innerHTML = `<br>` } -- Maya Angelou ` ,
    `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”${document.getElementById("mainpara").innerHTML = `<br>` } -- C.S. Lewis` ,
    `“A friend is someone who knows all about you and still loves you.”${document.getElementById("mainpara").innerHTML = `<br>` } -- Elbert Hubbard` ,
    `“To live is the rarest thing in the world. Most people exist, that is all.” ${document.getElementById("mainpara").innerHTML = `<br>` } -- Oscar Wilde` ,
    `“Always forgive your enemies; nothing annoys them so much.” ${document.getElementById("mainpara").innerHTML = `<br>` }--Oscar Wilde` ,
    `“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.” ${document.getElementById("mainpara").innerHTML = `<br>` } -- Martin Luther King Jr.` ,
    `“Live as if you were to die tomorrow. Learn as if you were to live forever.” ${document.getElementById("mainpara").innerHTML = `<br>` } -- Mahatma Gandhi` ,
    `“We accept the love we think we deserve.” ${document.getElementById("mainpara").innerHTML = `<br>` } -- Stephen Chbosky` ,
    `“Without music, life would be a mistake.” ${document.getElementById("mainpara").innerHTML = `<br>` } -- Friedrich Nietzsche` ,
    `“I am so clever that sometimes I don't understand a single word of what I am saying.” ${document.getElementById("mainpara").innerHTML = `<br>` }-- Oscar Wilde` ,
    `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” ${document.getElementById("mainpara").innerHTML = `<br>` } -- Ralph Waldo Emerson` ,
    `“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.” ${document.getElementById("mainpara").innerHTML = `<br>` } -- Steve Jobs` ,
    `“Insanity is doing the same thing, over and over again, but expecting different results.” ${document.getElementById("mainpara").innerHTML = `<br>` }-- Narcotics Anonymous` ,
    `“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.” ${document.getElementById("mainpara").innerHTML = `<br>` } -- Marilyn Monroe` ,
    `“It is better to be hated for what you are than to be loved for what you are not.” ${document.getElementById("mainpara").innerHTML = `<br>` } -- Andre Gide, Autumn Leaves` ,
    `“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.” ${document.getElementById("mainpara").innerHTML = `<br>` } -- H. Jackson Brown Jr.`
]
function pushToMain() 
{
   document.getElementById("mainpara").innerHTML = arrayQoutes[ Math.trunc(Math.random()* arrayQoutes.length-1)] ;
}


