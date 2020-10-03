export default function(key: string, data?: any) {
  if (data) {
    localStorage.setItem(key, JSON.stringify(data));
    return data;
  } else {
    const json = localStorage.getItem(key);
    return json ? JSON.parse(json) : null;
  }
}
