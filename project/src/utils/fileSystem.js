import { writeFile } from 'fs/promises';
import path from 'path';

export async function saveToFile(data, filename) {
  try {
    const filePath = path.resolve(process.cwd(), filename);
    await writeFile(filePath, JSON.stringify(data, null, 2));
    console.log(`Results successfully saved to ${filePath}`);
    return true;
  } catch (error) {
    throw new Error(`Failed to save file: ${error.message}`);
  }
}