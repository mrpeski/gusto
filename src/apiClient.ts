const API_VERSION = 1.0
const BASE_URL  = `http://localhost:3100/api/${API_VERSION}`

export const getProgramApplicationForm = async (programId: string):  Promise<ApplicationFormConfig | "error"> => {
    try {
      const resp = await fetch(`${BASE_URL}/programs/${programId}/application-form`);
      return (await resp.json()).data;
    } catch (err: any) {
      console.log('getProgramApplicationForm', err.message)
      return 'error' 
    }
}

export const updateProgramApplicationForm = async (programId: string, payload: ApplicationFormConfig) => {
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
      } catch (err: any) {
        console.log('updateProgramApplicationForm', err.message)
        return "error"
      }
}