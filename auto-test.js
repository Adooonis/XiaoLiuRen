// 自动测试脚本 - 验证所有修复
console.log('=== 小六壬修复验证测试 ===');

// 1. 验证六神排列顺序
function checkGodsOrder() {
    console.log('\\n1. 检查六神排列顺序:');
    const godsContainer = document.getElementById('grid-container');
    const gods = godsContainer.querySelectorAll('.grid-god');
    const expectedOrder = ['留连', '速喜', '赤口', '大安', '空亡', '小吉'];
    const actualOrder = Array.from(gods).map(god => god.getAttribute('data-god'));
    
    console.log('期望顺序:', expectedOrder);
    console.log('实际顺序:', actualOrder);
    
    let correct = true;
    for (let i = 0; i < expectedOrder.length; i++) {
        if (expectedOrder[i] !== actualOrder[i]) {
            console.log(`❌ 位置 ${i + 1}: 期望 "${expectedOrder[i]}", 实际 "${actualOrder[i]}"`);
            correct = false;
        } else {
            console.log(`✅ 位置 ${i + 1}: "${actualOrder[i]}" - 正确`);
        }
    }
    
    return correct;
}

// 2. 验证按钮居中
function checkButtonCenter() {
    console.log('\\n2. 检查按钮居中:');
    const submitBtn = document.getElementById('submit-btn');
    const container = document.querySelector('.container');
    
    // 检查CSS样式
    const styles = window.getComputedStyle(submitBtn);
    const display = styles.display;
    const margin = styles.margin;
    
    console.log('按钮display:', display);
    console.log('按钮margin:', margin);
    
    const isCentered = display === 'block' && margin.includes('auto');
    console.log(isCentered ? '✅ 按钮已居中' : '❌ 按钮未居中');
    
    return isCentered;
}

// 3. 验证元素顺序
function checkElementOrder() {
    console.log('\\n3. 检查元素顺序:');
    const content = document.querySelector('.content');
    const children = Array.from(content.children);
    
    const godsIntroSection = document.querySelector('.gods-intro-section');
    const resultSection = document.querySelector('.result-section');
    
    const godsIndex = children.findIndex(el => el === godsIntroSection);
    const resultIndex = children.findIndex(el => el === resultSection);
    
    console.log('六神介绍区域位置:', godsIndex);
    console.log('结果区域位置:', resultIndex);
    
    const correctOrder = resultIndex > godsIndex;
    console.log(correctOrder ? '✅ 结果区域在六神介绍后面' : '❌ 结果区域位置不正确');
    
    return correctOrder;
}

// 4. 验证按钮事件处理
function checkButtonEvents() {
    console.log('\\n4. 检查按钮事件处理:');
    const submitBtn = document.getElementById('submit-btn');
    
    // 检查onclick属性
    const hasOnclick = submitBtn.hasAttribute('onclick');
    console.log('有onclick属性:', hasOnclick ? '✅ 是' : '❌ 否');
    
    if (hasOnclick) {
        console.log('onclick值:', submitBtn.getAttribute('onclick'));
    }
    
    // 检查是否有handleCalculate函数
    const hasHandleCalculate = typeof window.handleCalculate === 'function';
    console.log('有handleCalculate函数:', hasHandleCalculate ? '✅ 是' : '❌ 否');
    
    return hasOnclick && hasHandleCalculate;
}

// 5. 测试按钮功能
function testButtonFunction() {
    console.log('\\n5. 测试按钮功能:');
    const submitBtn = document.getElementById('submit-btn');
    const questionInput = document.getElementById('question-input');
    
    // 设置测试问题
    questionInput.value = '测试问题';
    
    // 模拟点击
    const originalText = submitBtn.textContent;
    console.log('原始按钮文字:', originalText);
    
    // 调用handleCalculate函数
    try {
        handleCalculate();
        console.log('✅ handleCalculate调用成功');
        
        // 检查按钮状态变化
        setTimeout(() => {
            const newText = submitBtn.textContent;
            console.log('点击后按钮文字:', newText);
            
            if (newText.includes('推演中')) {
                console.log('✅ 按钮显示加载状态');
            } else {
                console.log('❌ 按钮未显示加载状态');
            }
            
            // 检查结果区域
            const resultSection = document.getElementById('result-section');
            const isVisible = resultSection.classList.contains('show');
            console.log('结果区域显示:', isVisible ? '✅ 是' : '❌ 否');
            
        }, 100);
        
        return true;
    } catch (error) {
        console.log('❌ handleCalculate调用失败:', error.message);
        return false;
    }
}

// 6. 生成测试报告
function generateReport() {
    console.log('\\n=== 测试报告 ===');
    
    const tests = [
        { name: '六神排列顺序', check: checkGodsOrder },
        { name: '按钮居中', check: checkButtonCenter },
        { name: '元素顺序', check: checkElementOrder },
        { name: '按钮事件处理', check: checkButtonEvents },
        { name: '按钮功能测试', check: testButtonFunction }
    ];
    
    let passed = 0;
    let total = tests.length;
    
    tests.forEach(test => {
        try {
            const result = test.check();
            if (result) passed++;
        } catch (error) {
            console.error(`❌ ${test.name} 测试失败:`, error);
        }
    });
    
    console.log(`\\n📊 测试结果: ${passed}/${total} 通过`);
    
    if (passed === total) {
        console.log('🎉 所有测试通过！修复成功！');
    } else {
        console.log('⚠️ 部分测试失败，需要进一步修复');
    }
}

// 运行测试
generateReport();