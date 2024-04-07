import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import * as S from './style';
import 'github-markdown-css';
import remarkGfm from 'remark-gfm';
import { useRecoilValue } from 'recoil';
import { markdownState } from '@/recoil/states';

interface Markdown {
  lightMode: boolean;
}

const MarkdownPreview = ({ lightMode }: Markdown) => {
  const markdown = useRecoilValue(markdownState);
  return (
    <S.PreviewContainer $lightMode={lightMode}>
      <ReactMarkdown
        className="markdown-body"
        rehypePlugins={[remarkGfm, rehypeHighlight, rehypeRaw]}
      >
        {markdown}
      </ReactMarkdown>
    </S.PreviewContainer>
  );
};

export default MarkdownPreview;