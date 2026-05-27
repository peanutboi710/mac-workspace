---
name: git-commit-push
description: "Automatically analyzes modified or untracked files in the Git repository, stages them in small granular logical units, commits each unit with the '(English Type): (Korean Message)' convention, and pushes all commits to the remote repository."
license: MIT
metadata:
  author: Antigravity
  version: 1.0
---

# Git Commit and Push Skill

This skill guides the AI agent to systematically split modifications into micro-commits, formulate commit messages matching the custom bilingual convention, and push all commits to the remote Git origin.

## Commit Message Convention

All commit messages must follow this specific pattern:

```text
(English Category): (Korean Message)
```

### English Categories (Types)
- **feat**: 새로운 기능 추가 (New feature)
- **fix**: 버그 및 오류 수정 (Bug fix)
- **docs**: 문서 작성 및 수정 (Documentation e.g., README.md, AGENTS.md)
- **style**: 코드 서식, 세미콜론 누락, UI 레이아웃 등 스타일 수정 (Code formatting, styling)
- **refactor**: 코드 리팩토링 (기능 변화가 없는 구조 개선)
- **perf**: 성능 개선 (Performance improvement)
- **test**: 테스트 코드 추가 및 수정 (Testing)
- **chore**: 빌드 업무, 패키지 매니저 설정 변경, 빌드 스크립트 수정 등 (Project maintenance)

### Examples
- `feat: 로그인 화면 소셜 로그인 연동 추가`
- `fix: 메인화면 스크롤 시 발생하는 오버플로우 오류 수정`
- `docs: AGENTS.md 에이전트 행동 규칙 추가`
- `style: 버튼 호버 효과 그라데이션 색상 수정`

---

## Instructions & Workflow

When this skill is activated, the agent must follow these sequential steps:

### 1. Analyze Current Git Status
- Run `git status` to review modified, deleted, or untracked files.
- Run `git diff` for each modified file to understand the specific changes made.

### 2. Formulate Granular Staging Plan
- Group changes logically into the smallest possible independent units (e.g., one file per commit, or small sets of highly related files).
- **CRITICAL**: Do not stage all files at once. Every logical component must be committed separately to preserve clean, incremental history.

### 3. Commit Incremental Batches
For each identified logical group:
1. Determine the appropriate English Category based on the diff.
2. Draft a clear, descriptive commit message in Korean.
3. Run `git add <file-paths>` to stage only this specific group.
4. Run `git commit -m "<Type>: <Korean Message>"` to create the commit.
5. Check status again using `git status` and repeat for all remaining changes.

### 4. Push to Remote
- Identify the current active branch by running `git branch --show-current`.
- Run `git push origin <current-branch>` to safely push all newly created commits to the remote repository.
