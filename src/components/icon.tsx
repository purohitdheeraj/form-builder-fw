import { JSX } from 'react';

interface IconProps {
  color?: string;
  width?: number;
  height?: number;
  fill?: boolean;
}

type Icons = {
  [key: string]: JSX.Element;
}

export type IconName = "number" | "date" | "draft" | "gripVertical" | "longAnswer" | "shortAnswer" | "singleSelect" | "url" | 'check';

const Icon = ({ name, color = "currentColor", fill = true, width = 24, height = 24 }: IconProps & { name: IconName }) => {
  const icons: Icons = {
    number: (
      <>
        <path d="M8.97298 2.5L5.63965 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.7229 13.3334H2.7229" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.9729 5.83337H3.9729" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.6397 2.5L12.3064 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    date: (
      <>
        <path
          d="M15 1.66675V3.33341M5 1.66675V3.33341"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.99633 10.8333H10.0038M9.99633 14.1666H10.0038M13.3259 10.8333H13.3334M6.66675 10.8333H6.67422M6.66675 14.1666H6.67422"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M2.91675 6.66675H17.0834" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M2.08325 10.2027C2.08325 6.57162 2.08325 4.75607 3.12669 3.62803C4.17012 2.5 5.84949 2.5 9.20825 2.5H10.7916C14.1503 2.5 15.8298 2.5 16.8732 3.62803C17.9166 4.75607 17.9166 6.57162 17.9166 10.2027V10.6307C17.9166 14.2618 17.9166 16.0773 16.8732 17.2053C15.8298 18.3333 14.1503 18.3333 10.7916 18.3333H9.20825C5.84949 18.3333 4.17012 18.3333 3.12669 17.2053C2.08325 16.0773 2.08325 14.2618 2.08325 10.6307V10.2027Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
    draft: (
      <>
        <path
          d="M13.1668 7.33337V6.66671C13.1668 4.15255 13.1668 2.89547 12.3857 2.11442C11.6047 1.33337 10.3476 1.33337 7.83347 1.33337H7.16687C4.65272 1.33337 3.39564 1.33337 2.6146 2.11441C1.83355 2.89545 1.83354 4.15252 1.83352 6.66666L1.8335 9.33337C1.83347 11.8475 1.83346 13.1046 2.61448 13.8856C3.39553 14.6666 4.65265 14.6667 7.1668 14.6667"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M4.8335 4.66663H10.1668M4.8335 7.99996H10.1668" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M8.83347 13.8846V14.6667H9.61573C9.88867 14.6667 10.0251 14.6667 10.1478 14.6159C10.2705 14.565 10.367 14.4686 10.56 14.2756L13.7757 11.0596C13.9577 10.8776 14.0487 10.7866 14.0974 10.6885C14.19 10.5017 14.19 10.2824 14.0974 10.0956C14.0487 9.99744 13.9577 9.90644 13.7757 9.72444C13.5937 9.54244 13.5027 9.45144 13.4045 9.40277C13.2177 9.31024 12.9983 9.31024 12.8115 9.40277C12.7134 9.45144 12.6223 9.54244 12.4403 9.72444L9.2246 12.9404C9.0316 13.1334 8.93513 13.2298 8.88433 13.3525C8.83347 13.4752 8.83347 13.6116 8.83347 13.8846Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </>
    ),
    gripVertical: (
      <>
        <path
          d="M4.375 3.23828H4.38029M4.375 8.23828H4.38029M4.375 13.2383H4.38029M11.0364 3.23828H11.0417M11.0364 8.23828H11.0417M11.0364 13.2383H11.0417"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
    longAnswer: (
      <>
        <path d="M2.5 5H10.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 10H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 15H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    shortAnswer: (
      <>
        <path d="M2.5 7.5H10.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 12.5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    singleSelect: (
      <>
        <g clipPath="url(#clip0)">
          <path
            d="M10.0001 18.3334C14.6025 18.3334 18.3334 14.6025 18.3334 10.0001C18.3334 5.39771 14.6025 1.66675 10.0001 1.66675C5.39771 1.66675 1.66675 5.39771 1.66675 10.0001C1.66675 14.6025 5.39771 18.3334 10.0001 18.3334Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M10.0001 13.3334C11.841 13.3334 13.3334 11.841 13.3334 10.0001C13.3334 8.15913 11.841 6.66675 10.0001 6.66675C8.15913 6.66675 6.66675 8.15913 6.66675 10.0001C6.66675 11.841 8.15913 13.3334 10.0001 13.3334Z"
            fill="currentColor"
          />
        </g>
      </>
    ),
    url: (
      <>
        <path d="M7.91675 12.0835L12.0834 7.91675" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.0386 12.1746L16.2132 10C17.9289 8.28427 17.9289 5.50252 16.2132 3.78679C14.4975 2.07107 11.7157 2.07107 10 3.78679L7.82537 5.96142M12.1746 14.0386L10 16.2132C8.28427 17.929 5.50253 17.929 3.7868 16.2132C2.07107 14.4975 2.07107 11.7157 3.7868 10L5.96142 7.82538" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    check: (
      <>

        <svg width="80" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40.5" cy="40" r="32" fill="#E2F5EA"></circle><path d="M30.9299 28.9494C36.4231 24.1921 44.5769 24.1921 50.0701 28.9494C52.5499 31.0969 54.2352 34.0161 54.8552 37.2373C56.2285 44.3733 52.1516 51.4346 45.2851 53.8133C42.1854 54.887 38.8146 54.887 35.7149 53.8133C28.8484 51.4346 24.7715 44.3733 26.1448 37.2373C26.7648 34.0161 28.4502 31.0969 30.9299 28.9494Z" fill="#00AA45" stroke="#1E874B"></path><path d="M32.168 40.8334L37.168 45.8334L48.8346 34.1667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>


      </>
    )
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={fill ? color : 'none'} width={width} height={height} viewBox="0 0 20 20">
      {icons[name]}
    </svg>
  );
};

export default Icon;