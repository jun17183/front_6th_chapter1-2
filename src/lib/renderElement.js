import { setupEventListeners } from "./eventManager";
import { createElement } from "./createElement";
import { normalizeVNode } from "./normalizeVNode";
import { updateElement } from "./updateElement";

export function renderElement(vNode, container) {
  // 1. vNode 정규화 (함수 컴포넌트 → HTML 태그)
  const normalizedVNode = normalizeVNode(vNode);
  
  // 2. 초기 렌더링 여부 확인
  const isInitialRender = !container._vNode;
  
  if (isInitialRender) {
    // 3. 최초 렌더링: createElement 사용
    console.log('최초 렌더링');
    
    // 기존 내용 제거
    container.innerHTML = '';
    
    // DOM 생성 및 추가
    const domElement = createElement(normalizedVNode);
    container.appendChild(domElement);
    
  } else {
    // 4. 업데이트 렌더링: updateElement 사용 (나중에 구현)
    console.log('업데이트 렌더링');
    
    // 임시로 전체 재렌더링
    container.innerHTML = '';
    const domElement = createElement(normalizedVNode);
    container.appendChild(domElement);
  }
  
  // 5. 이전 vNode 저장
  container._vNode = normalizedVNode;
  
  // 6. 이벤트 위임 설정
  setupEventListeners(container);
  
  console.log('renderElement 완료');
}