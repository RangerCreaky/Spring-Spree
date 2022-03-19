const set = async (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const get = async (key, def = null) => {
  const data = JSON.parse(localStorage.getItem(key));
  if (!data) return def;
  return data;
};

const remove = async (key) => {
  localStorage.removeItem(key);
};

const clear = async () => {
  localStorage.clear();
};

const storage = { set, get, clear, remove };

export default storage;
