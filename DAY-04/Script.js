       alert("Hello, World!");

        function sumNumbers() {
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);

            const sum = num1 + num2;

            console.log(sum);

            document.querySelector(".result").textContent = sum;
        }