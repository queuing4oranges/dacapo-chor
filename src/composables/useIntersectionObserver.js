/* 
    Reusable function that wraps the browser's IntersectionObserver
    API so it can be easily reused in multiple places
*/

export function useIntersectionObserver(callback, options = {}) {
    let observer = new IntersectionObserver(callback, options);

    return {
        observe: (el) => observer.observe(el),
        unobserve: (el) => observer.unobserve(el),
        disconnect: () => observer.disconnect()
    };
}