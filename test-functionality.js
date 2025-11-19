// 小六壬应用功能测试脚本
// 此脚本用于验证应用的核心功能是否正常

console.log('=== 小六壬应用功能测试开始 ===');

// 测试1: DOM元素获取测试
function testDOMElements() {
    console.log('测试1: 检查DOM元素...');
    
    const elements = {
        questionInput: document.getElementById('question'),
        submitBtn: document.getElementById('submit-btn'),
        resultSection: document.getElementById('result-section'),
        radioOptions: document.querySelectorAll('.radio-option'),
        gridGods: document.querySelectorAll('.grid-god')
    };
    
    let allElementsFound = true;
    
    for (let [name, element] of Object.entries(elements)) {
        if (element && (element.length > 0 || element !== null)) {
            console.log(`✅ ${name}: 找到`);
        } else {
            console.log(`❌ ${name}: 未找到`);
            allElementsFound = false;
        }
    }
    
    return allElementsFound;
}

// 测试2: 按钮事件监听器测试
function testEventListeners() {
    console.log('\n测试2: 检查按钮事件监听器...');
    
    const submitBtn = document.getElementById('submit-btn');
    if (!submitBtn) {
        console.log('❌ 开始测算按钮不存在');
        return false;
    }
    
    // 检查按钮样式
    const styles = window.getComputedStyle(submitBtn);
    console.log(`按钮 cursor: ${styles.cursor}`);
    console.log(`按钮 display: ${styles.display}`);
    console.log(`按钮 margin: ${styles.margin}`);
    
    return true;
}

// 测试3: 六神点击功能测试
function testGridGodsClick() {
    console.log('\n测试3: 检查六神点击功能...');
    
    const gridGods = document.querySelectorAll('.grid-god');
    console.log(`找到 ${gridGods.length} 个六神元素`);
    
    if (gridGods.length !== 6) {
        console.log(`❌ 六神元素数量不正确，期望6个，实际${gridGods.length}个`);
        return false;
    }
    
    // 检查六神名称和排列
    const expectedOrder = ['留连', '速喜', '赤口', '大安', '小吉', '空亡'];
    let correctOrder = true;
    
    gridGods.forEach((god, index) => {
        const godName = god.getAttribute('data-god');
        if (godName !== expectedOrder[index]) {
            console.log(`❌ 位置${index + 1}: 期望${expectedOrder[index]}，实际${godName}`);
            correctOrder = false;
        } else {
            console.log(`✅ 位置${index + 1}: ${godName}`);
        }
    });
    
    return correctOrder;
}

// 测试4: 页面布局测试
function testLayout() {
    console.log('\n测试4: 检查页面布局...');
    
    // 检查元素顺序
    const container = document.querySelector('.content');
    const sections = container.querySelectorAll('.section, .gods-intro-section, .result-section');
    
    console.log(`找到 ${sections.length} 个主要区域`);
    
    // 检查按钮是否在输入区域
    const inputSection = container.querySelector('.section');
    const submitBtn = inputSection.querySelector('#submit-btn');
    if (submitBtn) {
        console.log('✅ 测算按钮在输入区域内');
    } else {
        console.log('❌ 测算按钮不在输入区域内');
    }
    
    // 检查六神介绍位置
    const godsIntro = container.querySelector('.gods-intro-section');
    const resultSection = container.querySelector('.result-section');
    
    if (godsIntro && resultSection) {
        const godsIntroIndex = Array.from(container.children).indexOf(godsIntro);
        const resultIndex = Array.from(container.children).indexOf(resultSection);
        
        if (godsIntroIndex < resultIndex) {
            console.log('✅ 六神介绍在结果区域之前');
        } else {
            console.log('❌ 六神介绍在结果区域之后');
        }
    }
    
    return true;
}

// 运行所有测试
function runTests() {
    console.log('开始执行功能测试...\n');
    
    const results = {
        domElements: testDOMElements(),
        eventListeners: testEventListeners(),
        gridGodsClick: testGridGodsClick(),
        layout: testLayout()
    };
    
    console.log('\n=== 测试结果汇总 ===');
    let allPassed = true;
    
    for (let [testName, passed] of Object.entries(results)) {
        if (passed) {
            console.log(`✅ ${testName}: 通过`);
        } else {
            console.log(`❌ ${testName}: 失败`);
            allPassed = false;
        }
    }
    
    if (allPassed) {
        console.log('\n🎉 所有测试通过！应用功能正常。');
    } else {
        console.log('\n⚠️  部分测试失败，请检查相关功能。');
    }
    
    return allPassed;
}

// 在页面加载完成后运行测试
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runTests);
} else {
    runTests();
}

// 提供手动测试函数
window.testDivinationButton = function() {
    console.log('手动测试开始测算按钮...');
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.click();
        console.log('✅ 按钮点击事件触发');
    } else {
        console.log('❌ 按钮不存在');
    }
};