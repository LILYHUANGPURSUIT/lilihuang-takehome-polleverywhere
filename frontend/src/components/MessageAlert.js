import Swal from 'sweetalert2';

export const MessageAlert = (inputOne, inputTwo, inputThree, error) => {
    const required_input = {
        input1: inputOne || "",
        input2: inputTwo || "",
        input3: inputThree || ""
    }

    var toastMixin = Swal.mixin({
        toast: true,
        icon: !error ? "success" : "error",
        title: !error ? "success" : "error",
        animation: false,
        position: 'relative',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
        toastMixin.fire({
        animation: true,
        title: !error ? 
            "Added successfully" : 
            `${required_input.input1} ${required_input.input2} ${required_input.input3} required`
      });
}
