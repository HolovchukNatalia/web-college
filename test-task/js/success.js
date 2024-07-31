const urlParams = new URLSearchParams(window.location.search);
        const firstName = urlParams.get('firstName');
        const lastName = urlParams.get('lastName');
        const email = urlParams.get('email');
        const phone = urlParams.get('phone');

        console.log("Ім'я:", firstName);
        console.log("Прізвище:", lastName);
        console.log("Пошта:", email);
        console.log("Телефон:", phone);