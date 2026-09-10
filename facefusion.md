# FaceFusion 3.0 綜合使用指南與教程解析

本文件綜合整理自兩大主流 FaceFusion 教學內容，深入剖析 FaceFusion 3.0 的核心功能，涵蓋介面操作、圖片換臉、影片換臉、進階處理器（如對口型 Lip-sync 與黑白影片上色 Frame Colorizer）以及線上雲端運算資源。

---

## 一、 影片來源與參考
* **本地與進階面板詳解教學**：[【最新AI換臉】逼真到可怕!最強換臉軟件FaceFusion（附整合包）變態又自然的AI換臉教程！](https://www.youtube.com/watch?v=GgaPojVaIzc) [cite: http://www.youtube.com/watch?v=GgaPojVaIzc]
* **雲端與全功能操作指南**：[Face Fusion 3.0 Tutorial: Realistic Face Swapping and Colorizing Black & White Videos](https://www.youtube.com/watch?v=2ADPuFZOzpE) [cite: http://www.youtube.com/watch?v=2ADPuFZOzpE]

---

## 二、 FaceFusion 3.0 核心功能總覽

### 1. 處理模式 (Processors)
FaceFusion 支援多達 9 種可相互疊加的處理模組。常見的組合與建議設定包含：
* **Face Swapper**：核心換臉模組。建議搭配 `inaper128` 或預設模型 [00:00:46, 00:04:17]。
* **Face Enhancer**：面部畫質增強。強烈建議換臉時預設勾選，模型建議選擇 `1.4`，可大幅提升清晰度與自然度 [00:03:26, 00:04:13]。
* **Frame Enhancer**：畫面像素提升，可選 `768x768` 或 `1024x1024` [00:01:09]。

### 2. 圖片換臉操作流程
1. **上傳素材**：
   * **Source（來源）**：上傳希望保留面部特徵的人物圖像 [00:00:46]。
   * **Target（目標）**：上傳準備被替換面部的目標圖片 [00:00:53]。
2. **參數微調**：
   * 勾選 **Face Editor（臉部編輯）** 可對眉毛高度、眼睛轉向、頭部俯仰角等進行微調 [00:02:26]。
   * 啟用 **Age Modifier（年齡調節）** 可動態調整面部老化或幼化細節 [00:01:33]。
3. **生成與導出**：點擊 `Start`，系統會自動在數秒內生成高畫質換臉結果並支援直接下載 [00:02:05]。

### 3. 動態影片換臉與剪輯
* **影格預覽與裁剪**：上傳影片後可透過時間軸或「台簡針」預覽特定影格，並裁剪不需要處理的前後片段 [00:05:48]。
* **執行緒與硬體加速**：強烈建議將執行模式設為 **CUDA**（N卡）或 Tensor RT（Mac），執行緒數可依顯示卡規格（如 RTX 4070 可拉高至 24）調整以平衡速度與畫質 [00:04:41]。

### 4. 進階特色功能
* **Lip-Sync（嘴型同步）**：上傳音訊檔案與目標影片同步進行對口型與換臉處理，並透過 `Trim Frame` 匹配音訊與影片長度 [00:03:23]。
* **Frame Colorizer（黑白影片上色）**：移除 Face Swapper 模組並啟用該功能，可自動為歷史黑白影片或人物服飾精準填色 [00:04:29]。
* **即時實時換臉 (Live Face Swap)**：連接相機鏡頭，選擇目標人臉與 Face Enhancer 後即可實現變態又自然的實時視訊流換臉 [00:06:56]。

---

## 三、 線上雲端與整合包資源總覽

如果本地硬體配置不足，可利用以下雲端平台或社群整合包進行線上運行：

1. **雲端一鍵託管平台**：
   * **RunDiffusion (FaceFusion Cloud)**：官方合作的雲端桌面平台，提供免安裝的高效能雲端 GPU 運行環境 [RunDiffusion FaceFusion](https://www.rundiffusion.com/facefusion-online)。
   * **MimicPC AI Apps**：免安裝、點擊即用的線上 AI 應用與工作空間 [MimicPC FaceFusion](https://www.mimicpc.com/demo/facefusion)。
2. **Google Colab 開源筆記本**：
   * **Nick088 Official FaceFusion Colab**：支援 Google 雲端硬碟掛載與網頁端互動操作 [GitHub Colab Notebook](https://colab.research.google.com/github/Nick088Official/FaceFusion-Colab/blob/main/FaceFusion_UI.ipynb)。
3. **本地整合包與常用社群資源**：
   * 包含 SD-WebUI-AKI、ComfyUI 及 FaceFusion 本地端一鍵啟動整合包，可透過各大開源分享社區（如 Quark 網盤資源庫）獲取最新版本 [00:00:07]。
