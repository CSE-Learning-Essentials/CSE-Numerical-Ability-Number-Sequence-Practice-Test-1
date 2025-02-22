function checkAnswers() {
    const correctAnswers = {
        q1: "D",
        q2: "C",
        q3: "E",
        q4: "A",
        q5: "B",
        q6: "C",
        q7: "D",
        q8: "D",
        q9: "A",
        q10: "E"
    };

    let score = 0;

    // Check answers for each question
    for (let i = 1; i <= 10; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption && selectedOption.value === correctAnswers[`q${i}`]) {
            score++;
        }
    }

    // Display the score
    const resultDiv = document.getElementById("result");
    if (score >= 8) {
        resultDiv.textContent = `You passed the test with a score of ${score}/10.`;
    } else {
        resultDiv.textContent = `You failed the test with a score of ${score}/10. Try again!`;
    }
}
