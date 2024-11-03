// 假设 TreasureMap 类及其方法已经定义在此处或通过其他方式引入
// 模拟宝藏地图API
class TreasureMap {
  static getInitialClue() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("在古老的图书馆里找到了第一个线索...");
      }, 1000);
    });
  }

  static decodeAncientScript(clue) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!clue) {
          reject("没有线索可以解码!");
        }
        resolve("解码成功!宝藏在一座古老的神庙中...");
      }, 1500);
    });
  }

  static searchTemple(location) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random < 0.5) {
          reject("糟糕!遇到了神庙守卫!");
        }
        resolve("找到了一个神秘的箱子...");
      }, 2000);
    });
  }

  static openTreasureBox() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("恭喜!你找到了传说中的宝藏!");
      }, 1000);
    });
  }
}

function findTreasureWithPromises() {
  TreasureMap.getInitialClue()
    .then(clue => {
      console.log(clue);
      return TreasureMap.decodeAncientScript(clue);
    })
    .then(location => {
      console.log(location);
      return TreasureMap.searchTemple(location);
    })
    .then(box => {
      console.log(box);
      return TreasureMap.openTreasureBox();
    })
    .then(treasure => {
      console.log(treasure);
    })
    .catch(error => {
      console.error("任务失败:", error);
    });
}

findTreasureWithPromises()
// 异步函数来模拟寻宝过程
async function simulateTreasureHunt() {
  try {
    // 显示图书馆图片
    document.getElementById('treasure-image').src = 'images/library.png';
    document.getElementById('treasure-status').textContent = '在古老图书馆内探索...';
    await new Promise(resolve => setTimeout(resolve, 1000)); // 模拟延迟

    // 获取初始线索
    const initialClue = await TreasureMap.getInitialClue();
    document.getElementById('treasure-image').src = 'images/treasure clue.png';
    document.getElementById('treasure-status').textContent = initialClue;

    // 继续执行下一步：解码古代文字
    const decodedClue = await TreasureMap.decodeAncientScript(initialClue);
    document.getElementById('treasure-image').src = 'images/temple.png';
    document.getElementById('treasure-status').textContent = decodedClue;

    // 继续执行下一步：在神庙中搜索宝藏
    try {
      const treasureLocation = await TreasureMap.searchTemple(decodedClue);
      document.getElementById('treasure-image').src = 'images/treasure.png';
      document.getElementById('treasure-status').textContent = treasureLocation;
    } catch (error) {
      // 遭遇神庙守卫时显示 protector.png 图片
      document.getElementById('treasure-image').src = 'images/protector.png';
      document.getElementById('treasure-status').textContent = error.message;
      throw error; // 重新抛出错误以中断寻宝过程
    }

    // 继续执行下一步：打开宝藏箱子
    const treasure = await TreasureMap.openTreasureBox();
    document.getElementById('treasure-image').src = 'images/treasure open.png';
    document.getElementById('treasure-status').textContent = treasure;
  } catch (error) {
    // 处理可能出现的错误
    document.getElementById('treasure-status').textContent = `Error: ${error}`;
  }
}

// 在窗口加载完毕后开始寻宝
window.onload = function() {
  simulateTreasureHunt();
};
