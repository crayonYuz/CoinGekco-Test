'use client'

import { Card, CardContent, CardTitle } from "@/components/ui/card"

export function FallingTopicsSection({ title }: { title: string }) {
    const topics = [
        "ETF 수급 둔화에 비트코인 5% 하락",
        "금리 인상 우려에 암호화폐 전반 약세",
        "SEC, 이더리움 증권 분류 검토 중",
        "중국發 규제 리스크 다시 부상",
        "코인베이스 거래량 급감, 실적 우려 확산",
    ];

    return (
        <Card className="w-full">
            <CardContent className="space-y-4">
                <CardTitle>
                    {title}
                </CardTitle>

                <ul className="text-sm space-y-2">
                    {topics.map((t, i) => (
                        <li
                            key={i}
                            className="cursor-pointer rounded-md px-2 py-1 transition-colors hover:bg-gray-100"
                        >
                            {i + 1}. {t}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}