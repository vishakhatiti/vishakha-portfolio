import emailjs from "@emailjs/browser";

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_PUBLIC_KEY
    );

    return { success: true, response };
  } catch (error) {
    return { success: false, error };
  }
};