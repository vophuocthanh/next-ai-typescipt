'use client';
import { useRef } from 'react';
import ToolsNavigation from '@/components/dashboard/tools-navigation';
import { useChat } from 'ai/react';
import UserMessage from '@/components/dashboard/user-message';
import MarkdownResponse from '@/components/dashboard/markdown-response';
import AiResponse from '@/components/dashboard/ai-response';

const ConversationPage = () => {
  const containerRef = useRef(null);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    stop,
    error,
    setMessages,
  } = useChat({
    api: '/api/conversation',
  });

  return (
    <div className='h-full relative flex justify-between flex-col'>
      <div
        className='overflow-y-auto space-y-10 scroll-smooth h-[calc(100vh-180px)]'
        ref={containerRef}
      >
        {messages.length > 0 ? (
          <>
            {messages.map((m) => (
              <div className='whitespace-pre-wrap' key={m.id}>
                {m.role === 'user' ? (
                  <UserMessage>
                    <MarkdownResponse content={m.content} />
                  </UserMessage>
                ) : (
                  <AiResponse>
                    <MarkdownResponse content={m.content} />
                  </AiResponse>
                )}
              </div>
            ))}
          </>
        ) : (
          <ToolsNavigation title='Conversation' />
        )}
      </div>
    </div>
  );
};

export default ConversationPage;
