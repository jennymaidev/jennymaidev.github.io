export const useLookingForWork = (): boolean => {
  // Check the environment variable; defaults to false if not set
  // Note: Must use REACT_APP_ prefix for Create React App
  const lookingForWork = process.env.REACT_APP_LOOKING_FOR_WORK === 'true';
  return lookingForWork;
};