function getImgUrl(path: string) {
  return function (imgName: string) {
    /**
     * 参数一：相对路径
     * 参数二：当前文件路径的url
     */
    return new URL(`${path}${imgName}`, import.meta.url).href
  }
}

export const getAssetURL = getImgUrl('../assets/img/')
