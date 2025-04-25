export interface Extension
{
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

export async function fetchExtensions(): Promise<Extension[]>
{
  const response = await fetch('src/data.json');
  if (!response.ok)
  {
    throw new Error('Network response was not ok');
  }
  const data: Extension[] = await response.json();
  return data;
}
