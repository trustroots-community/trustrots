import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src", "content");

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  } catch (error) {
    notFound();
  }
}

// Add your existing imports and functions here

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ""),
        },
      };
    })
    .filter((r) => r.params.id !== "index");
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
