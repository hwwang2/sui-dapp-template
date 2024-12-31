import React, { useState } from 'react';
// import { faCopy } from '@fortawesome/free-solid-svg-icons'; // 引入 Font Awesome 图标
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // 引入 Font Awesome React 组件
// import '@fortawesome/fontawesome-free/css/all.css';
import { useToast } from "@/hooks/use-toast";
import {FaCopy} from "react-icons/fa";


 
const TextWithCopyIcon: React.FC<{ text: string }> = ({text}) => {
  const [textToCopy, _] = useState(text);
  const { toast } = useToast()
  const handleCopy = () => {
    // 这里你应该有一个函数来处理复制操作，比如使用 navigator.clipboard.writeText
    navigator.clipboard.writeText(textToCopy).then(() => {
      toast({
        description: "copied！",
      })
    }).catch((err) => {
      toast({
        variant: "destructive",
        title: "can not copy.",
        description: err
      });
    });
  };
 
  return (
    <div className="relative flex items-center w-full">
      <div className="mr-4 overflow-hidden whitespace-nowrap text-ellipsis">
        {textToCopy}
      </div>
      <button
        className="ml-2 bg-gray-50 text-gray-200 px-2 py-1 rounded"
        onClick={handleCopy}
        aria-label="copy" // 添加无障碍标签以描述按钮的用途
      >
        <FaCopy color='gray' />
      </button>
    </div>
  );
};
 
export default TextWithCopyIcon;