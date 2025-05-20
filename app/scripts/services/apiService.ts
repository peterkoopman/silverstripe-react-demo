export const fetchFamilies = async () => {
  const url = '/api/products/categories';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-requested-with': 'XMLHttpRequest',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return await response.json();
};

export const fetchGroups = async (family: string) => {
  const url = `/api/products/category/${family}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-requested-with': 'XMLHttpRequest',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return await response.json();
};

export const fetchProducts = async (group: string) => {
  const url = `/api/products/group/${group}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-requested-with': 'XMLHttpRequest',
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return await response.json();
};
