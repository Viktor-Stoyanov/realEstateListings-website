import emailjs from 'emailjs-com';

export const sendEmail = async (name, message, recipient) => {
  try {
    const response = await emailjs.send(
      'service_uq8ii78',
      'template_akqt2hg',
      {
        name,
        message,
        to_email: recipient
      },
      '9pIfA6RiffzEozjKv'
    );
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};