

const API_URL = process.env.REACT_APP_API_URL;
export const sendContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/contactfunctionauz?code=${process.env.REACT_APP_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
export const sendApplicationForm = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/applyfunctionauz?code=${process.env.REACT_APP_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Failed to submit application');
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}; 