// lib/types.ts
export interface PostData {
  id: string;
  contentHtml: string;
  title?: string;
  date?: string;
  // Add any other relevant fields here
}

// lib/types.ts
export interface PostParams {
  params: {
      id: string;
  };
}
