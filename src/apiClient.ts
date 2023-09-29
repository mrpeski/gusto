const API_VERSION = 1.0
const BASE_URL  = `http://localhost:3100/api/${API_VERSION}`

export const getProgramApplicationForm = async (programId: string) => {
    const resp = await fetch(`${BASE_URL}/programs/${programId}/application-form`);
    return resp.json();
}

export const updateProgramApplicationForm = async (programId: string, payload) => {
    const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({data: payload})
      };
      try {
        const resp = await fetch(`${BASE_URL}/programs/${programId}/application-form`, options);
        if (!resp.ok) throw new Error(`HTTP error ${resp.status}`);
        return payload;
      } catch (err) {
        console.log(err);
      }
}